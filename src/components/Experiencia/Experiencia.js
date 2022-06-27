import './Experiencia.css'
import { Modal } from "react-bootstrap";

function Experiencia(props) {
  return (
    <Modal
      {...props}
      size="lg"
      centered
      dialogClassName="container-menu-hamburguesa"
    >
      <div
        className="close-detail"
        onClick={() => {
          props.setShowExperiencia(false);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
        </svg>
      </div>
      <article className="container-experiencia">
        <p>
          Podría decir que mi formación en diseño comienza con el cursado de la
          Licenciatura en Diseño de la Comunicación Visual (UNL). Pero fue en el
          cruce entre esa experiencia de aprendizaje formal y mis múltiples
          recorridos por las artes escénicas que tomó forma mi oficio de artista
          gráfica. En el juego de luces y sombras detrás de la cámara y delante
          del público, en el montaje de escenas y de escenarios, en el collage
          de objetos y de imágenes. Esas son las herramientas que hacen a la
          creación de mis diseños. De manera analógica y digital propongo un mix
          de estilos y variables, haciendo con ellos y de ellos un gran collage.
          Pasen y vean, recorran la galería de imágenes, ¡y disfruten la
          función!
        </p>
      </article>
    </Modal>
  );
}

export { Experiencia };
