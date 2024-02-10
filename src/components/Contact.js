const Contact = () => {
    return (
        <div>
            <h1 className="p-4 m-4 font-bold text-3xl">Contact Us Page</h1>
            <form>
                <input
                    type="text"
                    className="p-2 m-2 border border-black rounded-lg"
                    placeholder="name"
                ></input>
                <input
                    type="text"
                    className="p-2 m-2 border border-black rounded-lg"
                    placeholder="message"
                ></input>
                <button className="p-2 m-2 border border-black bg-gray-200 rounded-lg">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact;

