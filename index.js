const app = new Vue({
    el: '#app',
    data: {
        divs: [
            {color: 'red' },
            {color: 'blue' },
            {color: 'green' },
            {color: 'green' },
            {color: 'red' },
            {color: 'blue' },
            {color: 'purple' },
            {color: 'purple' },
            {color: 'yellow' }
        ],
        filter: ''

    },
    computed: {
        filteredColors(){
            return this.divs.filter(row=>{
                const color = row.color.toString().toLowerCase();
                const searchColor = this.filter.toLowerCase();
                return color.includes(searchColor);
            })
        }
    }
});