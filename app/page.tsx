import Link from "next/link";
import {
  BarChart3,
  BrainCircuit,
  Check,
  ChevronDown,
  ChevronRight,
  Globe2,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  Sun
} from "lucide-react";

const features = [
  {
    title: "Focus on what matters",
    detail: "Bring clarity to your day and achieve your goals.",
    icon: Check
  },
  {
    title: "Everything connected",
    detail: "All areas of your life, beautifully connected in one place.",
    icon: BarChart3
  },
  {
    title: "AI that works for you",
    detail: "Get insights and suggestions tailored to your life.",
    icon: BrainCircuit
  }
];

export default function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-shell">
        <div className="login-hero">
          <Link className="login-brand" href="/">
            <span className="login-logo">
              <span />
            </span>
            <span>LifeOS</span>
          </Link>

          <div className="login-hero-copy">
            <h1>
              Your life.
              <span>Organised.</span>
            </h1>
            <p>
              LifeOS is your all-in-one operating system for tasks, habits, goals,
              finance, journal and everything in between.
            </p>
          </div>

          <div className="login-feature-list">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article className="login-feature" key={feature.title}>
                  <span>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2>{feature.title}</h2>
                    <p>{feature.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="login-quote">
            <Sparkles className="h-5 w-5" />
            <blockquote>
              LifeOS has changed the way I plan, focus and live every day.
            </blockquote>
            <div>
              <span className="login-avatar">D</span>
              <div>
                <strong>Damien M.</strong>
                <p>LifeOS User</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="login-side">
          <div className="login-top-actions">
            <button className="login-language-button" type="button">
              <Globe2 className="h-5 w-5" />
              English
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="login-theme-button" title="Theme" type="button">
              <Sun className="h-5 w-5" />
            </button>
          </div>

          <section className="login-card">
            <div className="login-card-mark">
              <span />
            </div>

            <header>
              <h2>Welcome back</h2>
              <p>Sign in to continue to LifeOS</p>
            </header>

            <div className="login-socials">
              <button type="button">
                <span className="login-google-mark">G</span>
                Continue with Google
              </button>
              <button type="button">
                <span className="login-apple-mark" />
                Continue with Apple
              </button>
            </div>

            <div className="login-divider">
              <span />
              <em>or</em>
              <span />
            </div>

            <form className="login-form">
              <label>
                <span>Email address</span>
                <div className="login-input-shell">
                  <Mail className="h-5 w-5" />
                  <input placeholder="you@example.com" type="email" />
                </div>
              </label>

              <label>
                <span>
                  Password
                  <Link href="/">Forgot password?</Link>
                </span>
                <div className="login-input-shell">
                  <LockKeyhole className="h-5 w-5" />
                  <input placeholder="••••••••••••" type="password" />
                </div>
              </label>

              <div className="login-form-options">
                <label>
                  <input defaultChecked type="checkbox" />
                  <span>Remember me</span>
                </label>
                <span>
                  <ShieldCheck className="h-4 w-4" />
                  Keep me signed in
                </span>
              </div>

              <Link className="login-submit" href="/home">
                Sign in
              </Link>
            </form>

            <p className="login-create-account">
              Don&apos;t have an account?
              <Link href="/">
                Create one
                <ChevronRight className="h-4 w-4" />
              </Link>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
