import React from "react";

function Footer() {
    return (
        <footer className="bg-dark text-white py-3">
            <div className="flex flex-wrap items-center justify-between mx-4 md:mx-0">
                <div className="mb-3 md:mb-0 text-center md:text-left">
                    <p className="text-primary-hover">
                        2025{" "}
                        <a
                            href="https://github.com/Cursedzyko"
                            className="text-reset btn-link mx-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Zyko
                        </a>
                        | All rights reserved
                    </p>
                </div>
                <div className="mb-3 md:mb-0 text-center">
                    <img src="/logo.png" alt="footer logo" className="w-48" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
