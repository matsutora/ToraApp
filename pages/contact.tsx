import Form from "../components/form"

export default function Contact() {
    return (
        <div className="text-center mx-auto rounded">  
            <div className="">
                <h2 className="text-2xl mb-4">Contact Me</h2>
                <input type="text" placeholder="名前" className="block rounded border mr-2 px-2 py-1 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-75" />
                <textarea type="text" placeholder="本文" className="block rounded border mr-2 px-2 py-1 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-75" />
                
                    <div className="mb-3 bg-green-300 rounded border">
                        <button className="btn btn warning" type="submit">送信する</button>
                    </div>
                
            </div>
            <Form />
        </div>
    )
}