jQuery.sap.declare("sapui6.ui.layout.HorizontalForm"),jQuery.sap.require("sap.ui.core.Control"),sap.ui.core.Control.extend("sapui6.ui.layout.HorizontalForm",{metadata:{library:"sapui6.ui.layout",properties:{visible:{type:"boolean",group:"Behavior",defaultValue:!0},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},minusWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"0px"},height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},margin:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},marginLeft:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},marginRight:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},marginTop:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},marginBottom:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},backgroundColor:{type:"string",group:"Appearance",defaultValue:null},widths:{type:"sap.ui.core.CSSSize[]",group:"Appearance",defaultValue:null},border:{type:"boolean",group:"Appearance",defaultValue:!0},borderColor:{type:"string",group:"Appearance",defaultValue:null},strongColor:{type:"string",group:"Appearance",defaultValue:null},labelBackgroundColor:{type:"string",group:"Appearance",defaultValue:null},labelBold:{type:"boolean",group:"Appearance",defaultValue:!1},labelAlign:{type:"string",group:"Appearance",defaultValue:null},fontSize:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},textColor:{type:"string",group:"Appearance",defaultValue:null},title:{type:"string",defaultValue:null},titleColor:{type:"string",group:"Appearance",defaultValue:null},titleFontSize:{type:"string",group:"Dimension",defaultValue:null},resize:{type:"boolean",defaultValue:!0}},defaultAggregation:"button",aggregations:{button:{type:"sap.ui.commons.Button",multiple:!0,singularName:"button"},toolbar:{type:"sap.ui.commons.Toolbar",multiple:!1},item:{type:"sap.ui.core.Control",multiple:!0,singularName:"item"}}},settings:null,onBeforeRendering:function(){jQuery.sap.require("sap.ui.core.theming.Parameters"),this.getTitleColor()||this.setProperty("titleColor",sap.ui.core.theming.Parameters.get("sapTitleColor"),!0),this.getBorderColor()||this.setProperty("borderColor",sap.ui.core.theming.Parameters.get("sapUiBaseBorder"),!0),this.getStrongColor()||this.setProperty("strongColor",sap.ui.core.theming.Parameters.get("sapActiveColor"),!0),this.getLabelBackgroundColor()||this.setProperty("labelBackgroundColor",sap.ui.core.theming.Parameters.get("sapUiListHeaderBackground"),!0),this.getFontSize()||this.setProperty("fontSize",sap.ui.core.theming.Parameters.get("sapUiDesktopFontSize"),!0),this.getTitleFontSize()||this.setProperty("titleFontSize",sap.ui.core.theming.Parameters.get("sapUiFontHeader4Size"),!0),this.getBackgroundColor()||this.setProperty("backgroundColor",sap.ui.core.theming.Parameters.get("sapUiTableRowBG"),!0),this.getTextColor()||this.setProperty("textColor",sap.ui.core.theming.Parameters.get("sapTextColor"),!0)},renderer:function(t,e){if(e.getVisible()&&e.settings){if(t.write("<div"),t.writeControlData(e),t.addClass("sapui6_formLayout"),t.writeClasses(),e.getWidth()&&t.addStyle("width",e.getWidth()),e.getMargin()&&t.addStyle("margin",e.getMargin()),e.getMarginLeft()&&t.addStyle("margin-left",e.getMarginLeft()),e.getMarginRight()&&t.addStyle("margin-right",e.getMarginRight()),e.getMarginTop()&&t.addStyle("margin-top",e.getMarginTop()),e.getMarginBottom()&&t.addStyle("margin-bottom",e.getMarginBottom()),t.writeStyles(),t.write(">"),e.getToolbar()?(t.write("<div>"),t.renderControl(e.getToolbar()),t.write("</div>")):(e.getButton().length>0||e.getTitle())&&(t.write("<div"),0==e.getButton().length&&(t.addStyle("margin-bottom","5px"),t.writeStyles()),t.write(">"),e.getButton().length>0&&(t.write("<span"),t.addClass("btn-right"),t.writeClasses(),t.write(">"),e.getButton().forEach(function(e,i){t.write("<span style='margin-left:5px;'>"),t.renderControl(e),t.write("</span>")})),t.write("</span>"),e.getTitle()&&(t.write("<span"),t.addClass("title"),t.writeClasses(),t.addStyle("color",e.getTitleColor()),t.addStyle("font-size",e.getTitleFontSize()),e.getStrongColor()&&t.addStyle("border-left-color",e.getStrongColor()),t.writeStyles(),t.write(">"),t.write(e.getTitle()),t.write("</span>")),t.write("</div>")),t.write("<table"),t.addStyle("border-top-color",e.getStrongColor()),t.addStyle("border-left-color",e.getBorderColor()),t.addStyle("border-right-color",e.getBorderColor()),t.addStyle("border-bottom-color",e.getBorderColor()),t.addStyle("font-size",e.getFontSize()),t.addStyle("background-color",e.getBackgroundColor()),t.addStyle("color",e.getTextColor()),t.writeStyles(),t.addClass("sapUiMlt"),t.writeClasses(),t.write(">"),e.getWidths()){t.write("<colgroup>");for(var i=e.getWidths().length,r=0;i>r;r++)t.write("<col"),t.addStyle("width",e.getWidths()[r]),t.writeStyles(),t.write("/>");t.write("</colgroup>")}t.write("<tbody>");for(var a=e.getItem(),o=0,l=e.settings.length,r=0;l>r;r++){var n=e.settings[r];if(t.write("<tr>"),t.write("<td"),t.addStyle("background-color",e.getLabelBackgroundColor()),e.getLabelBold()&&t.addStyle("font-weight","bold"),e.getLabelAlign()&&t.addStyle("text-align",e.getLabelAlign()),(e.getLabelBackgroundColor()||e.getLabelBold()||e.getLabelAlign())&&t.writeStyles(),t.addClass("label"),t.writeClasses(),t.write(">"),void 0!=n.label){var s=new sap.ui.commons.Label({text:n.label});n.required&&s.setRequired(n.required),n.requiredAtBegin&&s.setRequiredAtBegin(n.requiredAtBegin),t.renderControl(s)}t.write("</td>"),t.write("<td class='sapUiMltCell'>"),void 0!=n.element&&n.element.forEach(function(e,i){t.write("<span"),i<n.element.length-1&&(t.addStyle("margin-right","5px"),t.writeStyles()),t.write(">"),t.renderControl(a[o]),t.write("</span>"),o++}),t.write("</td>"),t.write("</tr>")}t.write("</tbody>"),t.write("</table>"),t.write("</div>")}},onAfterRendering:function(){var t=$("#"+this.getId()),e=t.parent().width();if(0==e&&this.getWidth().indexOf("%")>-1)var i=window.setInterval(function(){if(e=t.parent().width(),e>0){window.clearInterval(i),objWidth=e*(parseFloat(l.getWidth().split("%")[0])/100);var r=0;l.getMarginLeft()||l.getMarginRight()?(l.getMarginLeft()&&(r+=parseInt(l.getMarginLeft().split("px")[0])),l.getMarginRight()&&(r+=parseInt(l.getMarginRight().split("px")[0]))):l.getMargin()&&(r=2*parseInt(l.getMargin().split("px")[0])),$("#"+l.getId()).css("width",String(objWidth-r-parseInt(l.getMinusWidth().split("px")[0]))+"px")}},100);else if(this.getWidth().indexOf("px")>-1){var r=this.getWidth().split("px")[0];$("#"+this.getId()).css("width",String(r-a-parseInt(this.getMinusWidth().split("px")[0]))+"px")}else if(t.outerWidth()>=e){var a=0;this.getMarginLeft()||this.getMarginRight()?(this.getMarginLeft()&&(a+=parseInt(this.getMarginLeft().split("px")[0])),this.getMarginRight()&&(a+=parseInt(this.getMarginRight().split("px")[0]))):this.getMargin()&&(a=2*parseInt(this.getMargin().split("px")[0])),$("#"+this.getId()).css("width",String(e-a-parseInt(this.getMinusWidth().split("px")[0]))+"px")}if(this.getResize()){var o=parseFloat($("#"+this.getId()).outerWidth()/$(window).width()),l=this;jQuery.sap.delayedCall(50,l,function(){l.resizeLayout(o)}),$(window).resize(function(){jQuery.sap.delayedCall(50,l,function(){l.resizeLayout(o)})})}}}),sapui6.ui.layout.HorizontalForm.prototype.resizeLayout=function(t){$("#"+this.getId()).css("width",String(parseInt($(window).width()*t))+"px");var e=$("#"+this.getId()),i=e.parent().width();if(e.outerWidth()>=i){var r=0;this.getMarginLeft()||this.getMarginRight()?(this.getMarginLeft()&&(r+=parseInt(this.getMarginLeft().split("px")[0])),this.getMarginRight()&&(r+=parseInt(this.getMarginRight().split("px")[0]))):this.getMargin()&&(r=2*parseInt(this.getMargin().split("px")[0])),$("#"+this.getId()).css("width",String(i-r-parseInt(this.getMinusWidth().split("px")[0]))+"px")}},sapui6.ui.layout.HorizontalForm.prototype.set=function(t){this.settings=t;var e=this;this.settings.forEach(function(t){t.element.forEach(function(t){e.addAggregation("item",t)})})};