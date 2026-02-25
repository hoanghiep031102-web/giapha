var tree = new FamilyTree(document.getElementById("tree"), {

    search: true,

    nodeBinding: {
        field_0: "name",
        field_1: "info"
    },

    template: function (data) {

        // Tách chữ "Cụ" ra khỏi tên
        var parts = data.name.split(" ");
        var danhXung = parts[0]; // Cụ
        var ten = parts.slice(1).join(" "); // Hoàng Văn Khắc

        return `
            <div style="
                width:100%;
                height:100%;
                display:flex;
                flex-direction:column;
                justify-content:center;
                text-align:center;
                color:white;
                font-family:Arial;
            ">
                <div style="font-size:13px; font-weight:bold;">
                    ${danhXung}
                </div>

                <div style="font-size:15px; margin:4px 0;">
                    ${ten}
                </div>

                <div style="font-size:12px; opacity:0.8;">
                    ${data.info}
                </div>
            </div>
        `;
    },

    nodes: [
        { id: 1, name: "Cụ Hoàng Văn Khắc", info: "1900", pids: [2] },
        { id: 2, name: "Cụ Thỏ", info: "1900", pids: [1] }
    ]
});