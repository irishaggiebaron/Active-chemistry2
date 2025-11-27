var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-review1",
  "level": "1",
  "url": "sec-review1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-review2",
  "level": "1",
  "url": "sec-review2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-hydrocarbons1",
  "level": "1",
  "url": "sec-hydrocarbons1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-OHSH1",
  "level": "1",
  "url": "sec-OHSH1.html",
  "type": "Section",
  "number": "3.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-carbonylgroups1",
  "level": "1",
  "url": "sec-carbonylgroups1.html",
  "type": "Section",
  "number": "4.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-carbonylgroups2",
  "level": "1",
  "url": "sec-carbonylgroups2.html",
  "type": "Section",
  "number": "4.2",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-sugars1",
  "level": "1",
  "url": "sec-sugars1.html",
  "type": "Section",
  "number": "5.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-sugars2",
  "level": "1",
  "url": "sec-sugars2.html",
  "type": "Section",
  "number": "5.2",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-sugars3",
  "level": "1",
  "url": "sec-sugars3.html",
  "type": "Section",
  "number": "5.3",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-acidsamines1",
  "level": "1",
  "url": "sec-acidsamines1.html",
  "type": "Section",
  "number": "6.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-estersamides1",
  "level": "1",
  "url": "sec-estersamides1.html",
  "type": "Section",
  "number": "7.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-lipids1",
  "level": "1",
  "url": "sec-lipids1.html",
  "type": "Section",
  "number": "8.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-proteins1",
  "level": "1",
  "url": "sec-proteins1.html",
  "type": "Section",
  "number": "9.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-nucleicacids1",
  "level": "1",
  "url": "sec-nucleicacids1.html",
  "type": "Section",
  "number": "10.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-metabolism1",
  "level": "1",
  "url": "sec-metabolism1.html",
  "type": "Section",
  "number": "11.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
