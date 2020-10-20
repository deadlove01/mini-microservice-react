import React from 'react'

const PostCreate = () => {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" />
                </div>
                <button class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default PostCreate
