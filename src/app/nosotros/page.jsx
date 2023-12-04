import AboutUs from "@/components/AboutUs/AboutUs";
import "./nosotros.css";

export const metadata = {
   title: "Nosotros - Mentalis",
};

const NosotrosPage = () => {
   return (
      <div>
         <div className="nosotros">
            <div className="contNos">
               <h2 className="titleH2">Sobre nosotros</h2>
               <p className="textoNormal">
                  Mentalis, psicología y humanidades, es el fruto de un viaje
                  que ha llevado a nuestros fundadores, Ade y Pablo, a un puerto
                  donde convergen experiencias laborales y aprendizajes
                  personales y profesionales. Inspirados por proyectos previos y
                  agradecidos por la colaboración con amigos y colegas, hemos
                  decidido emprender nuestro propio proyecto de vida.
               </p>
               <p className="textoNormal">
                  En este momento crucial, encontramos en Mentalis la
                  oportunidad de consolidar nuestras pasiones compartidas,
                  ideales y experiencias de trabajo previas. A lo largo de
                  nuestras trayectorias, hemos visto iniciativas evolucionar y
                  concluir, lo que nos ha brindado la perspectiva necesaria para
                  dar vida a Mentalis.
               </p>
               <p className="textoNormal">
                  Con la firme intención de permanecer relevantes y marcando la
                  diferencia, nos embarcamos en este proyecto con paso firme,
                  reconociendo la importancia de cada aprendizaje compartido con
                  amigos y colegas en nuestro camino. Mentalis nace de la
                  amalgama de nuestras experiencias de aprendizaje, trabajo en
                  equipo y el deseo de contribuir positivamente a la comunidad.
               </p>
               <p className="textoNormal">
                  Somos un colectivo en proceso de formalización, avanzando con
                  paso a paso pero con una visión grandiosa. Nuestras líneas de
                  acción abarcan la clínica, investigación, historia y cultura,
                  salud mental y trabajo, educación, y responsabilidad social.
                  Cada una de estas áreas refleja nuestro compromiso integral
                  con el bienestar emocional, el crecimiento personal y el
                  desarrollo positivo de individuos y organizaciones.
               </p>
               <p className="textoNormal">
                  Mentalis se distingue por ser el proyecto de vida de dos
                  apasionados psicólogos que, además de compartir su amor por la
                  psicología clínica, la docencia y el trabajo comunitario, han
                  aprendido a escucharse y reconocerse desde la diferencia,
                  guiados por el supuesto fundamental de que se aman. Este
                  enfoque nos permite brindar servicios de psicoterapia,
                  investigación y consultoría para empresas con un
                  acompañamiento especializado que fomenta la empatía y el
                  bienestar emocional.
               </p>
               <p className="textoNormal">
                  Estamos comprometidos con la innovación constante, buscando
                  contribuir significativamente a la evolución de la psicología
                  y las humanidades no solo en nuestra comunidad, sino también
                  más allá de nuestras fronteras. En Mentalis, no solo ofrecemos
                  servicios, sino que también nos esforzamos por ser líderes en
                  la promoción de la salud mental y el desarrollo positivo,
                  dejando una huella positiva en el mundo que nos rodea.
               </p>
            </div>
            <hr />
            <AboutUs />
         </div>
      </div>
   );
};

export default NosotrosPage;
