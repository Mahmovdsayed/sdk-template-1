const Footer = () => {
    return <>
        <footer className="border border-gray-200 border-dashed py-8">
            <div className="container mx-auto px-4">
                <img
                    src="/mahmoud-sayed.svg"
                    alt="Mahmoud Sayed"
                    className="mx-auto h-auto w-32 max-w-full sm:w-40 md:w-48"
                />

                <div className="mt-8 border-t border-gray-200 border-dashed pt-4">
                    <p className="text-center text-xs text-gray-400">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    </>;
};

export default Footer;