 
import './Footer.css';
import {BsInstagram} from "react-icons/bs";
import {FaTiktok, FaFacebookSquare} from "react-icons/fa";



export default function Footer() {
  

  return (
    <div className='redes'>
    <p className='icon'> Creado por Macarena Soto </p>
    <a className='icon1' href="/"><BsInstagram/> </a>
    <a className='icon1' href="/"><FaFacebookSquare/></a>
    <a className='icon1' href="/"><FaTiktok/></a>
    </div>
  )
}