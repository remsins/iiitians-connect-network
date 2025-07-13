import React, { useEffect } from "react";
import Navigation from "./Navigation"; // Adjust path if needed

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      (function(){
        if (!window.chatbase || window.chatbase("getState") !== "initialized") {
          window.chatbase = (...arguments) => {
            if (!window.chatbase.q) { window.chatbase.q = [] }
            window.chatbase.q.push(arguments)
          };
          window.chatbase = new Proxy(window.chatbase, {
            get(target, prop) {
              if (prop === "q") { return target.q }
              return (...args) => target(prop, ...args)
            }
          });
        }
        const onLoad = function () {
          const script = document.createElement("script");
          script.src = "https://www.chatbase.co/embed.min.js";
          script.id = "jZfr9aX3URQcpl70IaBcU";
          script.domain = "www.chatbase.co";
          document.body.appendChild(script);
        };
        if (document.readyState === "complete") {
          onLoad();
        } else {
          window.addEventListener("load", onLoad);
        }
      })();
    `;
    document.body.appendChild(inlineScript);

    return () => {
      document.body.removeChild(inlineScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
