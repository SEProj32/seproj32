import React, { Component } from 'react'

export default class form_file_upload extends Component {
    render() {
        return (
            <div>
                <form action="http://localhost:9000/abc" name="myform" method="POST" enctype="multipart/form-data">
                    Uploadfile : <input type="file" name="document" /> <br/>
                    <input type="submit" />
                </form>
            </div>
           
        )
    }
}
