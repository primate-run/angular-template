
    import serve from "primate/serve";
    import views from "app:views";
    import routes from "app:routes";
    import pages from "app:pages";
    import assets from "app:assets";
    import s_config from "primate/symbol/config";
    
    const session_config = undefined;
    
    import facade from "$:app";

    
    import i18n from "app:config:i18n";
    const i18n_config = i18n[s_config];
    

    const app = await serve(import.meta.url, {
      assets,
      facade,
      routes,
      views,
      pages,
      mode: "testing",
      session_config,
      i18n_config,
      target: "web",
    });

    export default app;
  
