import React from "react";


function AddRecepieForm({onSubmit}) {
    const [body, setBody] = React.useState("");

    const handleSubmit = () => {
        // Invoke the passed in event callback
        onSubmit({body: body});
       

        // Clear the input field
        setBody("");
    };

    return (
        <div className="card">
            <div className="card-body">
                <h3 className="font-weight-bold indigo-text py-2" > Add your Recepie </h3>
                <div>
                    <div className="form-group">
                        <textarea 
                            className="form-control"
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                    </div>


                    <div className="form-group">
                        <button 
                            className="btn btn-primary btn-sm" 
                            onClick={handleSubmit}>
                                Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddRecepieForm;