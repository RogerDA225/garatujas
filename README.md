# Garatujas



## HTML para eu do futuro!

HTML significa HyperText Markup Language e é a
linguagem padrão de marcação para estruturar páginas web, definindo elementos como títulos, parágrafos, imagens e links.
Organiza o conteúdo com tags .
Incorpora textos, imagens, vídeos, áudios e tabela e conecta páginas entre si através de links.
Utiliza tags específicas para dar significado ao conteúdo,  onde a etiqueta de abertura é escrita entre colchetes angulares `< >` e a 
etiqueta de fechamento é escrita da mesma forma, mas com uma barra / antes do nome da tag. 
Por exemplo, `<h1>` é usado para títulos principais, `<p>` para parágrafos, `<a>` para links, entre outros.
A tag `<strong>` é usada para indicar que o texto deve ser exibido em negrito, e a tag `<em>` é usada para indicar que o texto deve ser exibido em itálico. 
O texto a ser marcado deve ser colocado entre as tags de abertura e fechamento.

*Nota*: Existem outras tags para aplicar formatações como negrito e itálico, como `<b>` e `<i>`, respectivamente. 
No entanto, as tags `<strong>` e `<em>` são consideradas mais semânticas, pois indicam a importância do texto, 
enquanto as tags `<b>` e `<i>` são puramente de formatação visual. Portanto, 
é recomendado usar as tags semânticas para melhorar a acessibilidade e a compreensão do conteúdo.

### Estrutura básica

Todo documento HTML deve começar com a declaração do tipo de documento `<!DOCTYPE html>`, 
que informa ao navegador que o documento é um arquivo HTML5. Em seguida, o documento é estruturado em duas partes principais: o `<head>` e o `<body>`.
O `<head>` é a seção do documento onde são incluídas informações sobre a página, como o título, 
links para arquivos CSS, scripts JavaScript, meta tags (metainformações), entre outros. O conteúdo do `<head>` não é exibido diretamente na página, 
mas é essencial para o funcionamento e a aparência da página web. Metainformações são "informações" que serão utilizadas para definir, falar sobre 
o que será exposto.

O `<body>` é a seção do documento onde o conteúdo visível da página é colocado. 
É aqui que você adiciona os elementos HTML que compõem a estrutura e o conteúdo da página, 
como títulos, parágrafos, imagens, links etc. O conteúdo do `<body>` é o que os usuários veem quando acessam a página web.
Todo o código HTML deve ser escrito dentro da tag `<html>`, que é a raiz do documento. O atributo `lang="pt-BR"` indica que o 
idioma principal do conteúdo da página é o português do Brasil, o que é importante para a acessibilidade e para os mecanismos de busca entenderem o idioma da página. 
O elemento `<meta charset="UTF-8">` define a codificação de caracteres do documento como `UTF-8`, garantindo que caracteres acentuados 
e outros símbolos sejam exibidos corretamente. O elemento `<title>` define o título da página, que é exibido na aba do navegador e nos resultados de busca.

### Atributos HTML

Os atributos HTML são usados para fornecer informações adicionais sobre os elementos HTML. Eles são escritos dentro da tag de abertura de um elemento 
e consistem em um nome e um valor, separados por um sinal de igual =. Os atributos podem ser usados para definir propriedades específicas de um elemento, 
como sua aparência, comportamento ou funcionalidade.
Por exemplo, o atributo `href` é usado em uma tag `<a>` para especificar o URL de destino de um link, 
enquanto o atributo `src` é usado em uma tag `<img>` para especificar a fonte da imagem. 
Imagine que temos a necessidade de criar um link para o site do Google em uma página web. Faremos isto:
```html
<a href="https://www.google.com">Visite o Google</a>
```

## CSS para eu do futuro!

CSS sidgnifica Cascading Style Sheets e é a
linguagem de estilo utilizada para definir a apresentação visual de documentos HTML ou XML.  
Ela controla o layout, cores, fontes, espaçamentos e responsividade, separando a estrutura do conteúdo (HTML) do design e 
transforma documentos estruturados em páginas web visualmente atraentes e organizadas.
Utiliza seletores (para definir qual elemento estilizar) e propriedades (para definir o estilo) e
facilita a manutenção, permite a reutilização de código e melhora a consistência visual do site.
Permite criar layouts complexos, animações e adaptar o conteúdo para diferentes dispositivos e resoluções. 

### Exemplo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
   <meta charset="UTF-8">
   <title>Exemplo de CSS</title>
   <link rel="stylesheet" href="styles.css">
</head>
<body>
   <h1>Olá, Mundo!</h1>
   <p>Este é um exemplo de CSS.</p>
</body>
</html>
```
Neste exemplo, temos um documento HTML básico com um título e um parágrafo. O arquivo CSS externo, `styles.css`,
é vinculado ao documento HTML usando a tag `<link>` no `<head>`. O conteúdo do arquivo `styles.css` pode ser o seguinte:

```css
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333333;
  text-align: center;
}

p {
  color: #666666;
  font-size: 18px;
  margin: 20px;
}
```
Sem o CSS, a página web seria exibida com o estilo padrão do navegador, 
que pode variar dependendo do navegador e do sistema operacional.

### Seletores CSS

Os seletores CSS são usados para selecionar os elementos HTML aos quais as regras de estilo serão aplicadas. 
A lógica dos seletores é baseada na estrutura do documento HTML (seguindo a hierarquia de elementos, por isso o nome "cascading" — em cascata), 
e eles permitem que você aplique estilos a elementos específicos ou a grupos de elementos com base em suas características, como tipo, classe, 
ID, atributos, entre outros.

#### Tipos de Seletores

| Tipo de Seletor | Exemplo | Descrição | 
| ----------------|---------|-----------|
| Seletor de Tipo               | `nome_elemento { }`              | Seleciona todos os elementos de um determinado tipo. Exemplo: `p { color: blue; }` seleciona todos os parágrafos e aplica a cor azul. |
| Seletor de Classe             | `.nome_classe { }`               | Seleciona elementos com uma classe específica. Exemplo: `.titulo { font-size: 24px; }` seleciona todos os elementos com a classe "titulo" e aplica um tamanho de fonte de 24 pixels. |
| Seletor de ID                 | `#nome_id { }`                   | Seleciona um elemento com um ID específico. Exemplo: `#paragrafo1 { color: red; }` seleciona o elemento com o ID "paragrafo1" e aplica a cor vermelha. |
| Seletor de Atributo           | `elemento[atributo="valor"] { }` | Seleciona elementos com um atributo específico ou um valor de atributo específico. Exemplo: `a[href="#"] { text-decoration: none; }` seleciona todos os links que têm um atributo `href` com o valor "#" e remove o sublinhado. |
| Pseudo-classes                | `elemento:pseudo-classe { }`     | Seleciona elementos com base em seu estado ou posição na hierarquia do documento. Exemplo: `p:first-child { font-weight: bold; }` seleciona o primeiro parágrafo dentro de seu elemento pai e aplica negrito. |

Seletores de descendentes, filhos e irmãos:

| Tipo de Seletor | Exemplo | Descirção |
| ----------------|---------|-----------|
| Seletor de Descendente        | `elemento1 elemento2 { }`        | Seleciona elementos que são descendentes de um elemento específico. Exemplo: `main section p { color: green; }` seleciona todos os parágrafos que estão dentro de uma seção, que por sua vez está dentro do elemento principal `<main>`, e aplica a cor verde. |
| Seletor de Filho              | `elemento1 > elemento2 { }`      | Seleciona elementos que são filhos diretos de um elemento específico. Exemplo: `main > section { background-color: lightgray; }` seleciona todas as seções que são filhos diretos do elemento principal `<main>` e aplica um fundo cinza claro. |
| Seletor de Irmão Adjacente    | `elemento1 + elemento2 { }`      | Seleciona um elemento que é imediatamente precedido por outro elemento específico. Exemplo: `h1 + p { margin-top: 0; }` seleciona o parágrafo que vem imediatamente após um título `<h1>` e remove a margem superior. |
| Seletor de Irmão Generalizado | `elemento1 ~ elemento2 { }`      | Seleciona elementos que são irmãos de um elemento específico, independentemente de sua posição. Exemplo: `h1 ~ p { color: gray; }` seleciona todos os parágrafos que são irmãos de um título `<h1>` e aplica a cor cinza. |















