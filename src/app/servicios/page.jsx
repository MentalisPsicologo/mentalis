import Footer from "@/components/Footer/Footer";
import ServiceCard from "@/components/Service/ServiceCard";
import "./servicios.css";

export const metadata = {
   title: "Servicios - Mentalis",
};

export default function Servicios() {
   return (
      <div className="contServ">
         <div className="contenido">
            <h2>Servicios</h2>
            <p>
               Aca iria una breve descripcion de los servicios que ofrece
               Mentalis
            </p>
            <hr />
            <ServiceCard />
         </div>
         <Footer />
      </div>
   );
}
