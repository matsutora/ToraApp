import {Navigation, Footer} from "./index";


export default function Layout(props) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="container flex flex-1 justify-center mx-auto px-5 max-w-screen-lg">
                {props.children}
            </main>
            <Footer />
        </div>
    );
}