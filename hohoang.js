var tree = new FamilyTree(document.getElementById("tree"), {

    orientation: FamilyTree.orientation.top,

    layout: FamilyTree.tree,   // ⬅️ BẮT BUỘC
    mode: "normal",            // ⬅️ BẮT BUỘC

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
// ===== Chuyển cảnh =====

document.addEventListener("DOMContentLoaded", () => {

  /* ===== PAGE ENTER (LOAD + BACK) ===== */

  document.body.classList.add("page-loaded");


  /* ===== PAGE EXIT ===== */

  document.querySelectorAll(".smooth-link").forEach(link => {

    link.addEventListener("click", function (e) {
      e.preventDefault();

      const href = this.getAttribute("href");

      document.body.classList.add("slide-out");

      setTimeout(() => {
        window.location.href = href;
      }, 450);
    });

  });

});


/* ===== FIX BACK BUTTON ===== */

window.addEventListener("pageshow", function (event) {

  if (event.persisted) {
    // Khi load từ cache (bấm Back)

    document.body.classList.remove("slide-out");
    document.body.classList.add("page-loaded");
  }

});
