import React from 'react';
import imageCompression from 'browser-image-compression';

class PhotoCompresser extends React.Component {

    state = {
        compressedLink: '',
        originalLink: '',
        originalPhoto: '',
        clicked: false,
        uploadPhoto: false
    }

    handleUpload = e => {
        const photoFile = e.target.files[0];
        this.setState({
            originalLink: URL.createObjectURL(photoFile),
            originalPhoto: photoFile,
            outputFileName: "compressed_" + photoFile.name,
            uploadPhoto: true
        });
    };

    handleCompress = e => {
        alert("handle compress");
        e.preventDefault();

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true
        }

        let output;

        imageCompression(this.state.originalPhoto, options).then( x => {
            output = x;
            const downloadLink = URL.createObjectURL(output);
            this.setState({
                compressedLink: downloadLink
            })
        })

        this.setState({clicked: true});
        return;
    }

    render() {
        return (
            <div>
                <div>
                <h3>Please upload your photo!</h3>
                    <input
                        type="file"
                        onChange={e => this.handleUpload(e)}
                    />
                </div>
                <div>
                    <h3>And then compress it</h3>
                    <button
                        onClick={e => this.handleCompress(e)}>
                        Compress
                    </button>
                </div>
                <div>
                    <h3>Download the compressed photo!</h3>
                    <a
                        href={this.state.compressedLink}    
                        download={this.state.outputFileName}
                    >
                        Download
                    </a>
                </div>
            </div>
        )
    }
}
export default PhotoCompresser;