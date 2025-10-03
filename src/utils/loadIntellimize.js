export const loadIntellimize = () => {
    if (process.env.NODE_ENV === "production") {
      const script = document.createElement("script");
      script.src = "https://cdn.intellimize.com/117778321.js";
      script.async = true;
      document.body.appendChild(script);
    }
  };
  