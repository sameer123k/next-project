import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Index Page | Next Application",
  description: "Index Description",
  keywords: "Best Next App, Top Next Application",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  }
};
export default function Home() {

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Build Faster. Launch Smarter.</h1>
          <p>
            Create responsive, SEO-friendly web applications with clean design,
            powerful performance, and scalable architecture.
          </p>

          <div className="hero-actions">
            <a href="#" className="btn-primary">Get Started</a>
            <a href="#" className="btn-secondary">Open Modal</a>
          </div>
        </div>

        <div className="hero-image">
          <img src="https://png.pngtree.com/png-vector/20240310/ourmid/pngtree-business-partnership-connection-isometric-png-image_11926892.png" alt="Dashboard Preview" />
        </div>
      </section>

      {/* modal */}
      <div className="modal">
        <a href="#">X</a>
        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Phone Number" />
        <input type="submit" />
      </div>
    </>
  );
}
