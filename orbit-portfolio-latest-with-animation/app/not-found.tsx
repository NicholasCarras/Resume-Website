import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="site-width not-found">
      <span className="mono accent-text">404 / OUT OF ORBIT</span>
      <h1>A little too far out.</h1>
      <p>This page isn’t here. Let’s get you back to familiar space.</p>
      <a href="/" className="primary-link">
        <ArrowLeft size={16} />
        Back to overview
      </a>
    </div>
  );
}
