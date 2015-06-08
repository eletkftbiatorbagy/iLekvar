// window.plugins.emailComposer
function EmailComposer(){this.resultCallback=null;}
EmailComposer.ComposeResultType={Cancelled:0,
Saved:1,
Sent:2,
Failed:3,
NotSent:4
}
EmailComposer.prototype.showEmailComposer=function(subject,body,toRecipients,ccRecipients,bccRecipients,bIsHTML,attachments){var args={};if(toRecipients)
args.toRecipients=toRecipients;if(ccRecipients)
args.ccRecipients=ccRecipients;if(bccRecipients)
args.bccRecipients=bccRecipients;if(subject)
args.subject=subject;if(body)
args.body=body;if(bIsHTML)
args.bIsHTML=bIsHTML;if(attachments)
args.attachments=attachments;cordova.exec(null, null, "EmailComposer", "showEmailComposer", [args]);}
EmailComposer.prototype.showEmailComposerWithCallback=function(callback, subject, body, toRecipients, ccRecipients, bccRecipients, isHTML, attachments){this.resultCallback=callback;this.showEmailComposer.apply(this,[subject,body,toRecipients,ccRecipients,bccRecipients,isHTML,attachments]);}
EmailComposer.prototype._didFinishWithResult=function(res){this.resultCallback(res);}
cordova.addConstructor(function(){if(!window.plugins)
{window.plugins={};}
if (!window.Cordova){window.Cordova=cordova;};window.plugins.EmailComposer=new EmailComposer();});