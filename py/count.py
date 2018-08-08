import cgi
import cgitb
import json

cgitb.enable()

form = cgi.FieldStorage()
if "bf post" in form:
    print "Content-type: text/json"
    print form
elif "bf highlight" in form:
    print "Content-type: text/json"
    print 2
elif "promo1" in form:
    print "Content-type: text/json"
    print 3
elif "promot2" in form:
    print "Content-type: text/json"
    print 4
else:
    print "Content-type: text/json"
    print "ERROR"
