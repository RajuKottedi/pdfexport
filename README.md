# PDF Export

## Description
Export HTML to PDF using Kendo UI.
It is a standalone feature of Kendo UI for exporting HTML to PDF with some modifications.

## Usage
You can also easily include PDF Export in your site using script tag:

``` HTML
<script src="dist/pdfexport.min.js"></script>
 or
 <script src="src/pdfexport.js"></script>
```

``` Javascript
kendo.drawing.drawDOM($(selector)).then(function(group){
    kendo.drawing.pdf.saveAs(group, "Example.pdf");
    });

```
## Reference
For Configuration http://docs.telerik.com/kendo-ui/framework/drawing/drawing-dom#configuration

## Examples
https://demos.telerik.com/kendo-ui/pdf-export/page-layout
