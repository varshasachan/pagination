import React from 'react';

class PaginationExample extends React.Component {

    constructor(props){
        super(props);

         this.states = {
           page:'',
           per_page:'',
           total:'',
           data:[],
           support:{}
         };
    }


    componentDidMount(){
       this.loadingData();
    }

    loadingData(){
        const params = new URLSearchParams(Location.search);
        const currentPage = parseInt(params.get('page')) || '1';
        if(currentPage !== this.state.page) {
            fetch(`https://reqres.in/api/users?page=1`, {method: 'GET'})
            .then(res => console.log(res.json()))
            .then(( { page, per_page, total, data,support}) => {
            this.setState({ page, per_page, total, data,support});
            });
        }
    }

    render() {
        const { page, per_page, total, data,support} = this.state;
        return (
           <div>
              <div>
               {data.map( item =>
               <div key={item.id}>
                   <p>{item.first_name}</p>
                   <p>{item.last_name}</p>
                   <p>{item.email}</p>
               </div> 
               )}
               </div>

               <div>

               </div>
           </div>
        );
    }
}

// "page": 1,
// "per_page": 6,
// "total": 12,
// "total_pages": 2,
// "data": [],
// "support": {
// "url": "https://reqres.in/#support-heading",
// "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
// }

export default PaginationExample;