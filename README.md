# Garatujas



## HTML para eu do futuro!

HTML significa HyperText Markup Language e é a
linguagem padrão de marcação para estruturar páginas web, definindo elementos como títulos, parágrafos, imagens e links.
Organiza o conteúdo com tags .
Incorpora textos, imagens, vídeos, áudios e tabela e conecta páginas entre si através de links.
Utiliza tags específicas para dar significado ao conteúdo,  onde a etiqueta de abertura é escrita entre colchetes angulares < > e a 
etiqueta de fechamento é escrita da mesma forma, mas com uma barra / antes do nome da tag. 
Por exemplo, `<h1>` é usado para títulos principais, <p> para parágrafos, <a> para links, entre outros.
A tag `<strong>` é usada para indicar que o texto deve ser exibido em negrito, e e a tag <em> é usada para indicar que o texto deve ser exibido em itálico. 
O texto a ser marcado deve ser colocado entre as tags de abertura e fechamento.

Nota: Existem outras tags para aplicar formatações como negrito e itálico, como <b> e <i>, respectivamente. 
No entanto, as tags <strong> e <em> são consideradas mais semânticas, pois indicam a importância do texto, 
enquanto as tags <b> e <i> são puramente de formatação visual. Portanto, 
é recomendado usar as tags semânticas para melhorar a acessibilidade e a compreensão do conteúdo.

## Estrutura básica

Todo documento HTML deve começar com a declaração do tipo de documento <!DOCTYPE html>, 
que informa ao navegador que o documento é um arquivo HTML5. Em seguida, o documento é estruturado em duas partes principais: o <head> e o <body>.
O <head> é a seção do documento onde são incluídas informações sobre a página, como o título, 
links para arquivos CSS, scripts JavaScript, meta tags (metainformações), entre outros. O conteúdo do <head> não é exibido diretamente na página, 
mas é essencial para o funcionamento e a aparência da página web. Metainformações são "informações" que serão utilizadas para definir, falar sobre 
o que será exposto.
O <body> é a seção do documento onde o conteúdo visível da página é colocado. 
É aqui que você adiciona os elementos HTML que compõem a estrutura e o conteúdo da página, 
como títulos, parágrafos, imagens, links etc. O conteúdo do <body> é o que os usuários veem quando acessam a página web.
Todo o código HTML deve ser escrito dentro da tag <html>, que é a raiz do documento. O atributo lang="pt-BR" indica que o 
idioma principal do conteúdo da página é o português do Brasil, o que é importante para a acessibilidade e para os mecanismos de busca entenderem o idioma da página. 
O elemento <meta charset="UTF-8"> define a codificação de caracteres do documento como UTF-8, garantindo que caracteres acentuados 
e outros símbolos sejam exibidos corretamente. O elemento <title> define o título da página, que é exibido na aba do navegador e nos resultados de busca.

## Atributos HTML

Os atributos HTML são usados para fornecer informações adicionais sobre os elementos HTML. Eles são escritos dentro da tag de abertura de um elemento 
e consistem em um nome e um valor, separados por um sinal de igual =. Os atributos podem ser usados para definir propriedades específicas de um elemento, 
como sua aparência, comportamento ou funcionalidade.
Por exemplo, o atributo href é usado em uma tag <a> para especificar o URL de destino de um link, 
enquanto o atributo src é usado em uma tag <img> para especificar a fonte da imagem. 
Imagine que temos a necessidade de criar um link para o site do Google em uma página web. Faremos isto:
<a href="https://www.google.com">Visite o Google</a>


## CSS para eu do futuro!

CSS sidgnifica Cascading Style Sheets e é a
linguagem de estilo utilizada para definir a apresentação visual de documentos HTML ou XML.  
Ela controla o layout, cores, fontes, espaçamentos e responsividade, separando a estrutura do conteúdo (HTML) do design. 
Transforma documentos estruturados em páginas web visualmente atraentes e organizadas.
Utiliza seletores (para definir qual elemento estilizar) e propriedades (para definir o estilo).
Facilita a manutenção, permite a reutilização de código e melhora a consistência visual do site.
Atualmente, utiliza-se o CSS3, que é dividido em módulos para facilitar o desenvolvimento.
Permite criar layouts complexos, animações e adaptar o conteúdo para diferentes dispositivos e resoluções. 
