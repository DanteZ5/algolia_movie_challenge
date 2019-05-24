handleDelete(id) {
    $.ajax({
        url: `/api/v1/items/${id}`,
        type: 'DELETE',
        success:() => {
           this.removeItemClient(id);
        }
    });
},

removeItemClient(id) {
    var newItems = this.state.items.filter((item) => {
        return item.id != id;
    });

    this.setState({ items: newItems });
},
