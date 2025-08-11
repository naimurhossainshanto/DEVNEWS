
import { article } from "motion/react-client";
export default function NewsGallery({ articles }) {
  if (!articles || articles.length === 0) {
    return <p>No articles found</p>;
  }

  return (
    <div>
      <div className="first-part"><div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Left side big image */}
      <div className="md:w-2/3 w-full">
        <a href={article.url} target="_blank" rel="noreferrer"><img
          src={articles[0].image}
          alt={articles[0].title}
          className="w-full h-[400px] object-cover rounded"
        />
        <h2 className="mt-2 font-bold text-lg">{articles[0].title}</h2></a>
      </div>

      {/* Right side smaller images */}
      <div className="md:w-1/3 grid grid-cols-2 md:grid-cols-1 gap-4">
  {articles.slice(1, 3).map((article) => (
    <div key={article.url}>
      <a href={article.url} target="_blank" rel="noreferrer"><img
        src={article.image}
        alt={article.title}
        className="w-full h-44 object-cover rounded"
      />
      <h3 className="text-sm mt-1">{article.title}</h3></a>
    </div>
        ))}
      </div>
    </div>
    </div>
    <div className="lastpast grid lg:grid-cols-3 gap-2  grid-cols-2">
        {articles.slice(4,10).map((article)=>{
          return  <div key={article.url} >
               <a href={article.url} target="_blank" rel="noreferrer"><img
        src={article.image}
        alt={article.title}
        className="w-full h-50 object-cover rounded"
      />
      <div className="text-sm font-semibold">{article.title}</div></a>
      <div className="text-[10px]">{article.description}</div>
      <div className="flex  items-center gap-1 font-extralight">
        
     <a href={article.source.url} target="_blank" rel="noreferrer"><span className=" my-2">{article.source.name}</span> </a>| <span>{article.publishedAt}</span>

      </div>
            </div>
        })}
    </div>
    </div>
  );
}
