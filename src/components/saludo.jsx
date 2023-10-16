import './Saludo.css'

function Saludo() {
    return ( 
        <>
          <p> Hola mi nombre es Daniela</p>
          <button className= 'button'>Boton</button>
          <h1 className='text-3x1 font-bold underline'> texto con tailwindcss</h1>

          <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"></div>
          <p>mi primera tarjeta</p>
        </>
      )
}

export default Saludo;