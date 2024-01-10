interface CacheContent {
    lastFetch: number;
    data: any;
    isFetching: boolean;
  }
  
  class CacheService {
    private cache: Record<string, CacheContent> = {};
  
    constructor() {}
  
    async getOrUpdate(key: string, fetchFunction: () => Promise<any>, ttl: number = 3600000): Promise<any> {
      const now = Date.now();
  
      if (this.cache[key] && now - this.cache[key].lastFetch < ttl && !this.cache[key].isFetching) {
        return this.cache[key].data;
      }
  
      if (this.cache[key]?.isFetching) {
        while (this.cache[key]?.isFetching) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        return this.cache[key].data;
      }
  
      try {
        this.cache[key] = { ...this.cache[key], isFetching: true };
        const data = await fetchFunction();
        this.cache[key] = { lastFetch: now, data, isFetching: false };
        return data;
      } catch (error) {
        console.error(`Error fetching data for key ${key}:`, error);
        this.cache[key].isFetching = false;
        throw error;
      }
    }
  }
  
  export const cacheService = new CacheService();
  