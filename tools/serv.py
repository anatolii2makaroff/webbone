from lxml import etree as et
from flask import request

import sqlite3

from flask import Flask
app = Flask(__name__)

@app.route("/api/v1.0/settings/save",  methods=['POST'])
def save():
    con = sqlite3.connect('settings.db')

    data = request.data

    xml = et.fromstring(data)

    v_app = xml.xpath("/root/params/app_name/text()")[0]
    v_id= xml.xpath("/root/params/view_id/text()")[0]

    s = xml.xpath("/root/params")[0]


    el = "<{0}>{1}</{0}>".format(v_id, et.tostring(s).replace('<id>view0</id>', '<id>'+v_id+'</id>'))


    print("{}, {}, {} ".format(v_app, v_id, el))


    cur = con.cursor()
    cur.execute('delete from t_webxml_settings where app=? and comp=?', (v_app, v_id))

    cur.execute('insert into t_webxml_settings values (?,?,?)', (v_app, v_id, el))
 
    con.commit()
    con.close()

    return '<sucsess>ok</sucsess>', 200

@app.route("/api/v1.0/settings/get",  methods=['POST'])
def get():

    con = sqlite3.connect('settings.db')


    data = request.data

    xml = et.fromstring(data)

    v_app = xml.xpath("/root/params/app_name/text()")[0]


    cur = con.cursor()
    cur.execute('select xml from t_webxml_settings where app=?', (v_app,))

    res = "<root>"
    for row in cur:
        res += row[0]

 
    con.close()

    return res + '</root>', 200




if __name__=="__main__":
    app.run()
