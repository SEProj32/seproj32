import React from "react"
//import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';



const form1 = {
    padding: '100px 100px 100px 100px',
    margin: '10px 10px 10px 10px',
    backgroundColor: 'pink'
  };


  const inp = {
    margin: '10px 10px 10px 10px',
  };

class Form2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cntry:'',loca: '',dateent: '', num: '',stat:'',s1:'',s2:'',s3:'',s4:'',s5:''/*,country: '', region: ''*/ };
        this.handleChange = this.handleChange.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleselect = this.handleselect.bind(this);
        this.handlelocChange = this.handlelocChange.bind(this);
        //this.handleselect2 = this.handleselect2.bind(this);
    }
   /* selectCountry (val) {
        this.setState({ country: val });
      }
     
      selectRegion (val) {
        this.setState({ region: val });
      }*/

    handleChange(event) {
        if (event.target.name === "entdate") {
            this.setState({ dateent: event.target.value })
        }
        else if (event.target.name === "days") {
            const re = /^[0-9\b]+$/;
            
            if (event.target.value === '' || re.test(event.target.value)) {
                this.setState({ num: event.target.value })
            }
        }
    }

    handlelocChange(event){
        if (event.target.name === "loc") {
            const re = /([a-zA-Z0-9\s_\\.\-\(\):])+(.jpeg|.png|.jpg)$/;
            
            if (event.target.value === '' || re.test(event.target.value)) {
                this.setState({ loca: event.target.value })
               // var file = System.IO.Path.GetFullPath(FileUpload1.PostedFile.FileName);
                //alert("the" + event.target.value);
            }
            else{
                alert("the file type is not avalable to upload");
            }
        }
    }

    handleselect(event){

        this.setState({ cntry: event.target.value })

        switch(event.target.value){
            case "india":
                this.setState({ s1: "ap" })
                this.setState({ s2: "ts" })
                this.setState({ s3: "tn" })
                this.setState({ s4: "up" })
                this.setState({ s5: "j&k" })
                break;
            case "australia":
                this.setState({ s1: "au1" })
                this.setState({ s2: "au2" })
                this.setState({ s3: "au3" })
                this.setState({ s4: "au4" })
                this.setState({ s5: "au5" })  
                break;  
            case "usa":
                this.setState({ s1: "usa1" })
                this.setState({ s2: "usa2" })
                this.setState({ s3: "usa3" })
                this.setState({ s4: "usa4" })
                this.setState({ s5: "usa5" })  
                break;
            case "africa":
                this.setState({ s1: "africa1" })
                this.setState({ s2: "africa2" })
                this.setState({ s3: "africa3" })
                this.setState({ s4: "africa4" })
                this.setState({ s5: "africa5" })  
                break; 
            case "germany":
                this.setState({ s1: "germany1" })
                this.setState({ s2: "germany2" })
                this.setState({ s3: "germany3" })
                this.setState({ s4: "germany4" })
                this.setState({ s5: "germany5" })  
                break;
            default:
                this.setState({ s1: "" })
                this.setState({ s2: "" })
                this.setState({ s3: "" })
                this.setState({ s4: "" })
                this.setState({ s5: "" })
        }
    }

    /*copy code in render to select country and region
    <CountryDropdown
                    value={this.state.country}
                    onChange={(val) => this.selectCountry(val)} />
                    <RegionDropdown
                    country={this.state.country}
                    value={this.state.region}
                    onChange={(val) => this.selectRegion(val)} />
    */




    render() {
        return (
            <div id="si">
                <form action="http://localhost:8081" onSubmit={this.handleSubmit} name="myform" method="GET" style={form1}>
                    DATE : <input type="date" value={this.state.dateent} name="entdate" onChange={this.handleChange} style={inp} required/> <br/><br/>
                    number of days : <input type="text" value={this.state.num} name="days" onChange={this.handleChange} style={inp} required/> <br/><br/>
                    country : 
                    


                    <select name="country" onChange={this.handleselect} value={this.state.cntry} style={inp} required>
                    <option value=""></option>
                    <option value="india">india</option>
                    <option value="australia">australia</option>
                    <option value="usa">usa</option>
                    <option value="africa">africa</option>
                    <option value="germany">germany</option>
                    </select>

                    <br/>
                    

                    state:


                    <select name="sta" style={inp} required>
                    <option value=""></option>
                    <option value={this.state.s1}>{this.state.s1}</option>
                    <option value={this.state.s2}>{this.state.s2}</option>
                    <option value={this.state.s3}>{this.state.s3}</option>
                    <option value={this.state.s4}>{this.state.s4}</option>
                    <option value={this.state.s5}>{this.state.s5}</option>
                    </select>

                    <br/>

                    upload : <input type="file" name="loc" accept="image/*" onBlur={this.handlelocChange} style={inp} required />

                    {/* upload <input type="text" onBlur={this.handlelocChange} name="loc" style={inp} required/> */}

                    <input type="submit" value="upload" style={inp} />
                </form>
            </div>
        )
    }
}
export default Form2
//    /([a-zA-Z0-9\s_\\.\-\(\):])+(.jpeg|.png|.jpg)$/