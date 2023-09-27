import { useState } from "react"

function Main() {
    const [contador, setContador] = useState(0)
    const [alerta, setAlerta] = useState("none")
    const [texto, setTexto] = useState("Texto entra aqui")
    const [liberarFoguete, setLiberarFoguete] = useState("none")

    const [imagem, setImagem] = useState(
        ["https://img.freepik.com/premium-photo/fire-alphabet-number-0-zero-isolated-black-background_564276-8905.jpg"
            , "https://images.unsplash.com/photo-1621440318464-72633426377b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8biVDMyVCQW1lcm8lMjAxfGVufDB8fDB8fHww&w=1000&q=80",
            "https://wallpapers.com/images/hd/2-background-fska48h5nzlkclvs.jpg",
            "https://images8.alphacoders.com/601/601898.png",
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/05249bd9-510e-41ce-a6e6-952ecd08d13a/d1o36hw-53428ec4-8e09-4f86-8e15-bae6c7dae566.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA1MjQ5YmQ5LTUxMGUtNDFjZS1hNmU2LTk1MmVjZDA4ZDEzYVwvZDFvMzZody01MzQyOGVjNC04ZTA5LTRmODYtOGUxNS1iYWU2YzdkYWU1NjYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.C6EADGy_d1aqv-4R8oGb0WOT4izEPrVN0sarnDL1ASA"
            , "https://images7.alphacoders.com/132/1325984.jpeg",
            "https://mcdn.wallpapersafari.com/medium/66/6/mvrjHi.jpg",
            "https://wallpapers.com/images/hd/number-7-6yasl2eoi0zvrok2.jpg",
            "https://wallpaperaccess.com/full/2495788.jpg",
            "https://images2.alphacoders.com/124/1248757.png",
            "https://cdn.wallpapersafari.com/81/91/zWXGA9.jpg"

        ])

    const aumentarContador = () => {
        if(contador ==4 ){
            setTexto("Gear 5")
            setAlerta("flex")
            setTimeout(()=>
            setAlerta("none"), 2000)
        }else if(contador ==9){
            setLiberarFoguete("flex")
            setTimeout(()=>
            setLiberarFoguete("none"), 4000)
            console.log("Ss na verdade esse contador era pra lançar um foguete 🤯")
        }
        if (contador >= 0 && contador < 10) {
            setContador((s) => s + 1)
        } else {
            setTexto("O contador não sobe mais do que 10 😅")
            setAlerta("flex")
            setTimeout(()=>
            setAlerta("none"), 2000)
        }

    }
    const dimunuirContador = () => {
        if(contador ==6 ){
            setTexto("Gear 5")
            setAlerta("flex")
            setTimeout(()=>
            setAlerta("none"), 2000)
        }
        if (contador > 0) {
            setContador((d) => d - 1)
        } else {
            setTexto("Contador não desce mais do que 0 😅")
            setAlerta("flex")
            setTimeout(()=>
            setAlerta("none"), 2000)
            
        }
    }

    return (
        <main style={{ backgroundImage: `url("${imagem[contador]}")` }}>
            <section className="principal">
                <h1> {contador} </h1>
                <section className="botões">
                    <button onClick={aumentarContador}>➕</button>
                    <button onClick={dimunuirContador}>➖</button>
                </section>
                {/* Aqui é onde fica */}
                <div className="alertar"
                    style={{ display: alerta }}>{texto}
                </div>
                {/* Aqui é onde fica o foguete esperando liberado */}
                <div className="foguete"style={{ display: liberarFoguete }} >
                    <img src="https://lab6.com.br/wp-content/uploads/2020/03/67b2a9ba5e85822f237caae92111e938.gif" alt=" um foguete" />
                </div>
            </section>

        </main>
    )
}
export default Main