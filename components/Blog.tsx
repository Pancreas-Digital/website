import Section from '../components/Section';
import LinkWithText from '../components/LinkWithText';
import BlogPostWithImage from '../components/BlogPost';
import {extractFirstImageUrlFromHtml, fetchBlogPosts, stripHtmlAndKeepLineBreaks, Entry} from '../utils/blogService';
import { useState, useEffect } from 'react';


export default function Blog(){
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const posts = await fetchBlogPosts();
      setBlogPosts(posts);
    }

    fetchData();
  }, []);

  return (<Section
      title="Nuestro Blog"
      id={'blog'}
      texts={[
        "Actualizate con lo último en diabetes y tecnología.",
        "Nuestro blog es un espacio donde compartimos noticias, consejos y todo lo que necesitás saber sobre tecnología y diabetes.", 
        "Mantenete siempre un paso adelante."
      ]}
      childrens={blogPosts.map((entry:Entry) => {
        // Asegúrate de que 'categories' exista y sea un arreglo
        const categories = entry.categories || ['General'];
      
        return (
          <BlogPostWithImage
            tags={categories}
            author={{
              'name': entry.author || 'Autor Desconocido',
              'url': entry.authorUri || '#',
              'imgSrc': entry.authorImage ? `https:${entry.authorImage}` : '/broken/author/image.jpg'
            }}
            post={{
              'title': entry.title,
              'url': entry.links.find(link => link.rel === 'alternate')?.href || '#',
              'imgSrc':  extractFirstImageUrlFromHtml(entry.content),
              'text': stripHtmlAndKeepLineBreaks(entry.content) || 'No hay contenido disponible.',
              'date': entry.published ? new Date(entry.published).toLocaleDateString() : 'Fecha Desconocida'
            }}
          />
        );
      })}
      
      bottomChildrens={[
        <LinkWithText text='Podés ver más posteos en nuestro' link={{'text':'blog','url':'https://pancreasdigital.blogspot.com'}}></LinkWithText>
      ]}
    ></Section>)
  };
