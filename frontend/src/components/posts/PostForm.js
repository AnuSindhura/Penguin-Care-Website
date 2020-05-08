import React from "react";

function PostForm({onSubmit}) {
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
                <h3 className="card-title" >Post what you know about Corona situation and help parents?</h3>
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
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostForm;
