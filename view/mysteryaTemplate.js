module.exports = {
    html: (header, main, footer) => {
        return `
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="utf-8">

        <title>Mysterya</title>
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.js"></script>
        <link rel="stylesheet" href="css/bootstrap-dark.css" type="text/css" />
        <link rel="icon" type="image/png" sizes="96x96" href="image/favicon.png">
        <link rel="shortcut icon" type="image/png" sizes="96x96" href="image/favicon.png">

        </head>
        <body class="d-flex flex-column min-vh-100">
            ${header}
            ${main}
            ${footer}
        </body>
        </html>
        `;
    },
    header : (headerMyNumber,year) => {
        return `
        <header class="position-sticky" style="top: 0; z-index: 100">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                <div class="container-fluid">
                    <a class="navbar-brand fs-3 fw-bold" href="/Mysterya"> <img
                        src="image/favicon.png" alt="" width="40" height="40" />
                        Mysterya
                    </a>
                    <button class="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link active"
                                aria-current="page" href="/Mysterya">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="/Mysterya/player/list">선수단</a></li>
                            <li class="nav-item"><a class="nav-link" href="/Mysterya/player/${headerMyNumber}">내정보</a></li>
                            <li class="nav-item"><a class="nav-link" href="/Mysterya/ranking/list">랭킹</a></li>
                            <li class="nav-item dropdown"><a
                                class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    기타 </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">경기기록</a></li>
                                    <li><a class="dropdown-item" href="#"></a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">추가정보</a></li>
                                </ul></li>
                        </ul>
                        <form class="d-flex">
                            <select class="form-select-sm" id="autoSizingSelect">
                                <option selected value="num">등번호</option>
                                <option value="name">이름</option>
                            </select> <input class="form-control me-2" type="search"
                                placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">
                                Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>    
        `;
    },
};
