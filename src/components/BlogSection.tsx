// import { useEffect, useState } from "react";
// import { supabase } from "../lib/supabaseClient"; // AJUSTA SE PRECISAR
// import { ArrowRight } from "lucide-react";

// const BlogSection = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchPosts() {
//       try {
//         const { data, error } = await supabase
//           .from("Linkedin_posts")
//           .select("*")
//           .order("created_at", { ascending: false });
//           .limit(3);

//         if (error) {
//           console.error("Erro Supabase:", error);
//           setPosts([]);
//         } else {
//           setPosts(data || []);
//         }
//       } catch (err) {
//         console.error("Erro geral:", err);
//         setPosts([]);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchPosts();
//   }, []);

//   return (
//     <section id="blog" className="py-20 md:py-28 bg-background">
//       <div className="container">
//         <div className="max-w-2xl mx-auto text-center mb-16">
//           <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">
//             Blog
//           </span>
//           <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-foreground">
//             Conteúdo que orienta
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             Dicas, tendências e orientações para quem está construindo ou reformando.
//           </p>
//         </div>

//         {/* LOADING */}
//         {loading && (
//           <p className="text-center text-muted-foreground">
//             Carregando posts...
//           </p>
//         )}

//         {/* SEM POSTS */}
//         {!loading && posts.length === 0 && (
//           <p className="text-center text-muted-foreground">
//             Nenhum post encontrado.
//           </p>
//         )}

//         {/* POSTS */}
//         <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           {posts?.map((post) => (
//             <article
//               key={post.id}
//               onClick={() => post.post_url && window.open(post.post_url, "_blank")}
//               className="bg-card p-8 rounded-lg border border-border hover:border-gold/30 hover:shadow-lg transition-all group cursor-pointer"
//             >
//               {/* IMAGEM */}
//               {post.image_url && (
//                 <img
//                   src={post.image_url}
//                   alt={post.title || "Post"}
//                   className="w-full h-40 object-cover rounded mb-4"
//                 />
//               )}

//               <span className="text-xs font-medium text-gold uppercase tracking-wider">
//                 LinkedIn
//               </span>

//               <h3 className="text-lg font-serif font-semibold mt-3 mb-3 text-foreground group-hover:text-primary transition-colors">
//                 {post.title || "Sem título"}
//               </h3>

//               <p className="text-muted-foreground text-sm leading-relaxed mb-4">
//                 {post.content || ""}
//               </p>

//               <div className="flex items-center justify-between">
//                 <span className="text-xs text-muted-foreground">
//                   {post.created_at
//                     ? new Date(post.created_at).toLocaleDateString("pt-BR")
//                     : ""}
//                 </span>

//                 <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
//                   Ver no LinkedIn <ArrowRight className="h-4 w-4" />
//                 </span>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { ArrowRight } from "lucide-react";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(3);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from("linkedin_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setPosts(data || []);
      }

      setLoading(false);
    }

    fetchPosts();
  }, []);

  function handleLoadMore() {
    setLoadingMore(true);

    setTimeout(() => {
      setVisible((prev) => prev + 3);
      setLoadingMore(false);
    }, 500); // simula loading suave
  }

  return (
    <section id="blog" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-foreground">
            Conteúdo que orienta
          </h2>
          <p className="text-muted-foreground text-lg">
            Dicas, tendências e orientações para quem está construindo ou reformando.
          </p>
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-center text-muted-foreground">
            Carregando posts...
          </p>
        )}

        {/* POSTS */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.slice(0, visible).map((post) => (
            <article
              key={post.id}
              onClick={() => post.post_url && window.open(post.post_url, "_blank")}
              className="bg-card p-8 rounded-lg border border-border hover:border-gold/30 hover:shadow-lg transition-all group cursor-pointer"
            >
              {post.image_url && (
                <img
                  src={post.image_url}
                  alt={post.title || "Post"}
                  className="w-full h-40 object-cover rounded mb-4"
                />
              )}

              <span className="text-xs font-medium text-gold uppercase tracking-wider">
                LinkedIn
              </span>

              <h3 className="text-lg font-serif font-semibold mt-3 mb-3 text-foreground group-hover:text-primary transition-colors">
                {post.title || "Sem título"}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {post.content || ""}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {post.created_at
                    ? new Date(post.created_at).toLocaleDateString("pt-BR")
                    : ""}
                </span>

                <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Ver no LinkedIn <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* BOTÃO VER MAIS */}
        {visible < posts.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition-all duration-300"
            >
              {loadingMore ? "Carregando..." : "Ver mais posts"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;