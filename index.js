const bpconfig = hexo.config.backgroundplus || {};
const css = hexo.extend.helper.get('css').bind(hexo);
const js = hexo.extend.helper.get('js').bind(hexo);

hexo.extend.injector.register('head_end', (() =>{
    var hconfig = bpconfig.background || {};
    hconfig.enable = hconfig.enable && true;
    if (!hconfig.enable){
        return null
    }
    hconfig.url = hconfig.url || "https://open.pixivic.net/wallpaper/pc/random?size=original&domain=https://i.pixiv.cat&webp=0&detail=1"
    hconfig.repeats =hconfig.repeats || "no-repeat";
    hconfig.attachment =  hconfig.attachment || "fixed";
    hconfig.size = hconfig.size || "cover";
    return "<style>body{"+
        "background-image: url(" + hconfig.url + ");"+
        "background-repeat: "+hconfig.repeats+";"+
        "background-attachment: "+hconfig.attachment+";"+
        "background-size: "+hconfig.size+";"+
        "}</style>";
})(), (() =>{
    return (bpconfig.background || {}).layout || 'default';
})());

hexo.extend.injector.register('body_end', () =>{
    let c = bpconfig.aplayer || {};
    return "<div name='aplayerResource'>"+
            css(c.aplayerCssCdn || "https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css")+
            js(c.aplayerJsCdn || "https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js")+
            js(c.meetingJsCdn || "https://unpkg.com/meting@2.0.1/dist/Meting.min.js")+
            "</div>";
}, (() =>{
    return (bpconfig.aplayer || {}).layout || 'default';
})());
hexo.extend.injector.register('body_end', () =>{
    let c = bpconfig.aplayer || {};
    if (!c.pid){
        return null
    }
    c.theme = c.theme ||"#2980b9";
    c.order = c.order || "random"
    return "<meting-js name='aplayerConfig' "+
        "server='netease' "+
        "type='playlist' "+
        "fixed=true "+
        "autoplay=false "+
        "order='"+c.order+"'"+
        "theme='"+c.theme+"'"+
        "id='"+c.pid+"'"+
        "></meting-js>";
}, (() =>{
    return (bpconfig.aplayer || {}).layout || 'default';
})());


