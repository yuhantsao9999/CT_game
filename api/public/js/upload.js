const fileInput = document.querySelector('.button-wrapper');
function processSelectedFiles(fileInput) {
    var files = fileInput.files;
    document.getElementById('file-return').innerHTML = files[0].name;
}
const uploadTeamFile = () => {
    const getUrlString = location.href;
    const url = new URL(getUrlString);
    const teamId = url.searchParams.get('teamId');
    const teamName = url.searchParams.get('teamName');
    const activityName = url.searchParams.get('activityName');
    const input = document.querySelector('input[type="file"]');
    if (teamId && teamName) {
        const data = {
            teamId,
            teamName,
        };
        const formData = new FormData();
        for (file of input.files) {
            formData.append('files', file, file.name);
        }
        formData.append('data', JSON.stringify(data));
        fetch('http://140.122.164.194:5000/upload', {
            mode: 'cors',
            method: 'post',
            body: formData,
        })
            .then((response) => {
                console.log('upload response', response);
                if (response.status !== 200) {
                    alert('伺服器未開機，請聯絡開發人員');
                }
                return response.text();
            })
            .then((response) => {
                let xml, code;
                try {
                    xml = Blockly.Xml.textToDom(response);
                } catch (e) {
                    console.log('xml error', e);
                }

                const demoWorkspace = new Blockly.Workspace();
                Blockly.Xml.domToWorkspace(xml, demoWorkspace);

                code = Blockly.Python.workspaceToCode(demoWorkspace);
                // code =
                //     'C0C1 = None\nC2C3 = None\nC4C5 = None\n\n\nfor C0C1 in board[yellow_player]:\n  if C0C1 != 0:\n    for C2C3 in Neighbor(C0C1):\n      if Exist_Chess(C2C3) == 0:\n        score = (score + 20)\n      elif Exist_Chess(C2C3) == 2:\n        score = (score + 15)\n      else:\n        score = (score - 20)\n';
                // const standardCode =
                //     'C0C1 = None\nC2C3 = None\nC4C5 = None\n\n\nfor C0C1 in board[yellow_player]:\n  if C0C1 != 0:\n    for C2C3 in Neighbor(C0C1):\n      if Exist_Chess(C2C3) == 0:\n        score = (score + 20)\n      elif Exist_Chess(C2C3) == 2:\n        score = (score + 15)\n      else:\n        score = (score - 20)\n';
                if (code === '') {
                    alert('上傳程式碼有誤，請檢查後再重新上傳');
                    return;
                }
                const pythonCodeData = {
                    pythonCodeA: code,
                    pythonCodeB: '',
                };
                console.log('pythonCodeData', JSON.stringify(pythonCodeData));
                const newFormData = new FormData();
                newFormData.append('pythonCodeData', JSON.stringify(pythonCodeData));

                fetch('http://140.122.164.194:5000/battle', {
                    mode: 'cors',
                    method: 'post',
                    body: newFormData,
                })
                    .then((response) => {
                        console.log('battle response', response);
                        if (response.status === 500) {
                            alert('上傳程式碼有誤，請檢查後再重新上傳');
                        }
                        return response.json();
                    })
                    .then((response) => {
                        //         console.log('error proof battle process', response);
                        //         if (response) {
                        fetch('/api/insertPythonCode', {
                            method: 'post',
                            body: JSON.stringify({
                                teamId,
                                activityName,
                                teamName,
                                pythonCode: code,
                            }),
                            headers: {
                                'content-type': 'application/json',
                            },
                        })
                            .then((response) => {
                                return response;
                            })
                            .then((response) => {
                                console.log(response);
                                fetch('/api/uploadFileName', {
                                    method: 'post',
                                    body: formData,
                                })
                                    .then((response) => {
                                        console.log('uploadFileName response', response);
                                        return response;
                                    })
                                    .then((response) => {
                                        if (response.status == 200) {
                                            console.log('Success:', response);
                                            alert(`完成提交！`);
                                        }
                                    })
                                    .catch((error) => {
                                        alert(`上傳失敗請重新上傳`);
                                        console.error('Error:', error);
                                    });
                            })
                            .catch((error) => console.error('Error:', error));
                        // } else {
                        //     alert('上傳程式碼有誤，請檢查後再重新上傳');
                        // }
                    })
                    .catch((error) => console.error('Error:', JSON.stringify(error)));
            })
            .catch((error) => alert('伺服器問題，請聯絡開發人員:' + error));
    } else {
        alert('請登入');
        window.location.href = './main';
    }
};
