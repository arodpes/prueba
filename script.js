const headerList = {
  template: `
    <div class="header-list">
      <div v-for="i in elementos" :key="i">{{i}}</div>
    </div>
  `,
  data() {
      return {
        elementos: ['Documento', 'Metadatos', 'Agrupación', 'Textual', 
                    'Multimedia', 'Tablas', 'Formulario', 'Scripting', 
                    'Interactivas', 'Semánticas', 'Ideogramáticas', 
                    'Edición', 'Obsoletas']
      }
  },
  methods: {
    enable(i) {
      this.$el.querySelectorAll('div')[i].classList.add('active');
    },
    disable(i) {
      this.$el.querySelectorAll('div')[i].classList.remove('active');
    }
  }
};

const elemento = {
  template: `
    <a class="elemento" :class="color($vnode.key)" target="_blank"
         @mouseenter="header.enable(currentBlock)" 
         @mouseleave="header.disable(currentBlock)">
      <span class="num">{{$vnode.key + 1}}</span>
      <p>{{abbr}}</p>
      <span class="name">{{element}}</span>
    </a>    
  `,
  props: {
    id: Number,
    abbr: String,
    name: String,
    color: String
  },
  data() {
    return {
      colors: ["green", "yellow", "beige", "pink", "water", "lightgreen", "cyan", "lightblue", "blue", "lightyellow", "salmon", "lightpink", "grey"],
      limits: [3, 8, 22, 46, 58, 68, 82, 86, 90, 103, 110, 112, 122],
    }
  },
  computed: {
    element() { return `<${this.name}>`; },
    header() { return this.$parent.$refs.header; },
    currentBlock() { 
      return this.limits.findIndex(e => this.$vnode.key < e);
    }
  },
  methods: {
    color(v) {
      for (i in this.limits)
        if (v < this.limits[i])
          return this.colors[i];
    }
  }
};

const vm = new Vue({
  el: '#app',
  components: {
    elemento: elemento,
    headerList: headerList,
  },
  data() {
    return {
      elementos: [
        { abbr: 'H', name: 'html', href: 'http://lenguajehtml.com/p/html/introduccion/estructura-documento-html' },
        { abbr: 'Hd', name: 'head', href: 'http://lenguajehtml.com/p/html/introduccion/estructura-documento-html' },
        { abbr: 'Bd', name: 'body', href: 'http://lenguajehtml.com/p/html/introduccion/estructura-documento-html' },
        { abbr: 'Ti', name: 'title', href: 'https://lenguajehtml.com/p/html/cabecera/etiquetas-html-de-relacion' },
        { abbr: 'Bs', name: 'base', href: 'https://lenguajehtml.com/p/html/cabecera/etiquetas-html-de-relacion' },
        { abbr: 'Lk', name: 'link', href: 'https://lenguajehtml.com/p/html/cabecera/etiquetas-html-de-relacion' },
        { abbr: 'Mt', name: 'meta', href: 'https://lenguajehtml.com/p/html/cabecera/etiquetas-html-de-relacion' },
        { abbr: 'St', name: 'style', href: 'https://lenguajehtml.com/p/html/cabecera/etiquetas-html-de-relacion' },
        { abbr: 'P', name: 'p', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-agrupacion#etiquetas-html-para-agrupaciones' },
        { abbr: 'Hr', name: 'hr', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-agrupacion#etiquetas-html-para-agrupaciones' },
        { abbr: 'Pre', name: 'pre', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-agrupacion#etiquetas-html-para-agrupaciones' },
        { abbr: 'Bq', name: 'blockquote', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-agrupacion#etiquetas-html-para-agrupaciones' },
        { abbr: 'Ol', name: 'ol', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-agrupacion#etiquetas-html-para-listas' },
        { abbr: 'Ul', name: 'ul', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-agrupacion#etiquetas-html-para-listas' },
        { abbr: 'Li', name: 'li', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-agrupacion#etiquetas-html-para-listas' },
        { abbr: 'Dl', name: 'dl', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-agrupacion#etiquetas-html-para-listas-de-descripciones' },
        { abbr: 'Dt', name: 'dt', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-agrupacion#etiquetas-html-para-listas-de-descripciones' },
        { abbr: 'Dd', name: 'dd', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-agrupacion#etiquetas-html-para-listas-de-descripciones' },
        { abbr: 'Fi', name: 'figure', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-agrupacion#etiquetas-html-para-ilustraciones-figuras' },
        { abbr: 'Fc', name: 'figcaption', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-agrupacion#etiquetas-html-para-ilustraciones-figuras' },
        { abbr: 'Dv', name: 'div', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-agrupacion#etiquetas-html-para-agrupaciones' },
        { abbr: 'Mn', name: 'main', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-agrupacion#etiquetas-html-para-agrupaciones' },
        { abbr: 'A', name: 'a', href: 'https://lenguajehtml.com/p/html/semantica/enlaces-o-hipervinculos' },
        { abbr: 'Em', name: 'em', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-para-fragmentos-de-texto' },
        { abbr: 'Str', name: 'strong', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-para-fragmentos-de-texto' },
        { abbr: 'Sm', name: 'small', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-de-modificacin-de-significado' },
        { abbr: 'S', name: 's', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-para-fragmentos-de-texto' },
        { abbr: 'Ci', name: 'cite', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-para-fragmentos-de-texto' },
        { abbr: 'Q', name: 'q', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-de-modificacin-de-significado' },
        { abbr: 'Dfn', name: 'dfn', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-de-modificacin-de-significado' },
        { abbr: 'Ab', name: 'abbr', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-de-modificacin-de-significado' },
        { abbr: 'Da', name: 'data', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-orientadas-a-aspectos-informticos' },
        { abbr: 'Tim', name: 'time', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-orientadas-a-aspectos-informticos' },
        { abbr: 'Co', name: 'code', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-orientadas-a-aspectos-informticos' },
        { abbr: 'Va', name: 'var', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-orientadas-a-aspectos-informticos' },
        { abbr: 'Sa', name: 'samp', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-orientadas-a-aspectos-informticos' },
        { abbr: 'Kb', name: 'kbd', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-orientadas-a-aspectos-informticos' },
        { abbr:  'Sub', name: 'sub', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-de-modificacin-de-significado' },
        { abbr: 'Sup', name: 'sup', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-de-modificacin-de-significado' },
        { abbr: 'I', name: 'i', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-para-fragmentos-de-texto' },
        { abbr: 'B', name: 'b', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-para-fragmentos-de-texto' },
        { abbr: 'U', name: 'u', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-para-fragmentos-de-texto' },
        { abbr: 'Mk', name: 'mark', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-para-fragmentos-de-texto' },
        { abbr: 'Sp', name: 'span', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-para-fragmentos-de-texto' },
        { abbr: 'Br', name: 'br', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-de-modificacin-de-significado' },
        { abbr: 'Wbr', name: 'wbr', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-de-modificacin-de-significado' },
        { abbr:  'Img', name: 'img', href: 'https://lenguajehtml.com/p/html/multimedia/etiquetas-html-de-imagenes' },
        { abbr: 'Pic', name: 'picture', href: 'https://lenguajehtml.com/p/html/multimedia/etiquetas-html-de-imagenes' },
        { abbr: 'Ifr', name: 'iframe', href: 'https://lenguajehtml.com/p/html/multimedia/etiquetas-html-de-contenido-externo#etiquetas-html-para-contenido-externo' },
        { abbr: 'Emb', name: 'embed', href: 'https://lenguajehtml.com/p/html/multimedia/etiquetas-html-de-contenido-externo#etiquetas-html-para-contenido-externo' },
        { abbr: 'Obj', name: 'object', href: 'https://lenguajehtml.com/p/html/multimedia/etiquetas-html-de-contenido-externo#etiquetas-html-para-contenido-externo' },
        { abbr: 'Par', name: 'param', href: 'https://lenguajehtml.com/p/html/multimedia/etiquetas-html-de-contenido-externo#etiquetas-html-para-contenido-externo' },
        { abbr: 'Vi', name: 'video', href: 'https://lenguajehtml.com/p/html/multimedia/etiquetas-html-de-video' },
        { abbr: 'Au', name: 'audio', href: 'https://lenguajehtml.com/p/html/multimedia/etiquetas-html-de-audio' },
        { abbr: 'Src', name: 'source', href: 'https://lenguajehtml.com/p/html/multimedia/etiquetas-html-de-video' },
        { abbr: 'Trk', name: 'track', href: 'https://lenguajehtml.com/p/html/multimedia/etiquetas-html-de-subtitulos' },
        { abbr: 'Map', name: 'map', href: 'https://lenguajehtml.com/p/html/semantica/enlaces-o-hipervinculos' },
        { abbr: 'Ar', name: 'area', href: 'https://lenguajehtml.com/p/html/semantica/enlaces-o-hipervinculos' },
        { abbr: 'Tb', name: 'table', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-tablas' },
        { abbr: 'Cap', name: 'caption', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-tablas' },
        { abbr: 'Cg', name: 'colgroup', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-tablas' },
        { abbr: 'Col', name: 'col', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-tablas' },
        { abbr: 'TBd', name: 'tbody', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-tablas' },
        { abbr: 'THd', name: 'thead', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-tablas' },
        { abbr: 'TFt', name: 'tfoot', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-tablas' },
        { abbr: 'Tr', name: 'tr', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-tablas' },
        { abbr: 'Th', name: 'th', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-tablas' },
        { abbr: 'Td', name: 'td', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-tablas' },
        { abbr: 'Frm', name: 'form', href: 'https://lenguajehtml.com/p/html/formularios/crear-un-formulario' },
        { abbr: 'Lab', name: 'label', href: 'https://lenguajehtml.com/p/html/formularios/crear-un-formulario' },
        { abbr: 'In', name: 'input', href: 'https://lenguajehtml.com/p/html/formularios/controles-campos-de-texto' },
        { abbr: 'But', name: 'button', href: 'https://lenguajehtml.com/p/html/formularios/botones-de-envio-de-formulario' },
        { abbr: 'Sel', name: 'select', href: 'https://lenguajehtml.com/p/html/formularios/controles-listas-de-seleccion' },
        { abbr: 'Dtl', name: 'datalist', href: 'https://lenguajehtml.com/p/html/formularios/controles-listas-de-seleccion' },
        { abbr: 'Og', name: 'optgroup', href: 'https://lenguajehtml.com/p/html/formularios/controles-listas-de-seleccion' },
        { abbr: 'O', name: 'option', href: 'https://lenguajehtml.com/p/html/formularios/controles-listas-de-seleccion' },
        { abbr: 'Ta', name: 'textarea', href: 'https://lenguajehtml.com/p/html/formularios/controles-campos-de-texto#campos-extensos-de-texto' },
        { abbr: 'Out', name: 'output', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto' },
        { abbr: 'Prg', name: 'progress', href: 'https://lenguajehtml.com/p/html/formularios/medidores-y-barras-de-progreso' },
        { abbr: 'Met', name: 'meter', href: 'https://lenguajehtml.com/p/html/formularios/medidores-y-barras-de-progreso' },
        { abbr: 'Fs', name: 'fieldset', href: 'https://lenguajehtml.com/p/html/formularios/organizacion-de-campos' },
        { abbr: 'Le', name: 'legend', href: 'https://lenguajehtml.com/p/html/formularios/organizacion-de-campos' },
        { abbr: 'Sc', name: 'script', href: 'https://lenguajehtml.com/p/html/scripting/etiquetas-html-scripts' },
        { abbr: 'NSc', name: 'noscript', href: 'https://lenguajehtml.com/p/html/scripting/etiquetas-html-scripts#la-etiqueta-noscript' },
        { abbr: 'Tp', name: 'template', href: 'https://lenguajehtml.com/p/html/scripting/etiquetas-html-scripts#la-etiqueta-template' },
        { abbr: 'Sl', name: 'slot', href: 'https://lenguajehtml.com/p/html/scripting/etiquetas-html-scripts' },
        { abbr: 'Cv', name: 'canvas', href: 'https://lenguajehtml.com/p/html/scripting/etiquetas-html-interactivas' },
        { abbr: 'Det', name: 'details', href: 'https://lenguajehtml.com/p/html/scripting/etiquetas-html-interactivas' },
        { abbr: 'Sum', name: 'summary', href: 'https://lenguajehtml.com/p/html/scripting/etiquetas-html-interactivas' },
        { abbr: 'Dia', name: 'dialog', href: 'https://lenguajehtml.com/p/html/scripting/etiquetas-html-interactivas' },
    ],
    semantics: [
        { abbr: 'Art', name: 'article', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-seccion' },
        { abbr: 'Sec', name: 'section', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-seccion' },
        { abbr: 'Nav', name: 'nav', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-seccion' },
        { abbr: 'h1', name: 'h1', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-seccion' },
        { abbr: 'h2', name: 'h2', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-seccion' },
        { abbr: 'h3', name: 'h3', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-seccion' },
        { abbr: 'h4', name: 'h4', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-seccion' },
        { abbr: 'h5', name: 'h5', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-seccion' },
        { abbr: 'h6', name: 'h6', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-seccion' },
        { abbr: 'Hdr', name: 'header', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-seccion' },
        { abbr: 'Ftr', name: 'footer', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-seccion' },
        { abbr: 'Asd', name: 'aside', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-seccion' },
        { abbr: 'Add', name: 'address', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-seccion' },
        { abbr: 'Rub', name: 'ruby', href: '#' },
        { abbr: 'Rb', name: 'rb', href: '#' },
        { abbr: 'Rt', name: 'rt', href: '#' },
        { abbr: 'Rtc', name: 'rtc', href: '#' },
        { abbr: 'Rp', name: 'rp', href: '#' },
        { abbr: 'Bdi', name: 'bdi', href: '#' },
        { abbr: 'Bdo', name: 'bdo', href: '#' },
        { abbr: 'Ins', name: 'ins', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-de-edicin' },
        { abbr: 'Del', name: 'del', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-de-texto#etiquetas-html-de-edicin' }
      ],
      deprecated: [
        { abbr: 'App', name: 'applet', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-obsoletas' },
        { abbr: 'Acr', name: 'acronym', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-obsoletas' },
        { abbr: 'Fr', name: 'frame', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-obsoletas' },
        { abbr: 'Frs', name: 'frameset', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-obsoletas' },
        { abbr: 'NFr', name: 'noframe', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-obsoletas' },
        { abbr: 'Fnt', name: 'font', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-obsoletas' },
        { abbr: 'Big', name: 'big', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-obsoletas' },
        { abbr: 'Blk', name: 'blink', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-obsoletas' },
        { abbr: 'Cen', name: 'center', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-obsoletas' },
        { abbr: 'Mrq', name: 'marquee', href: 'https://lenguajehtml.com/p/html/semantica/etiquetas-html-obsoletas' }
      ]
    }
  }
});
