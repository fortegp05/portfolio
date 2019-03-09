<header-contents>
    <div class="header">
        <h1>{opts.page_name}</h1>
        <ul class="pankuzu">
            <li>
                <a href="index.html">HOME</a>
            </li>
            <li>
                {opts.page_name}
            </li>
        </ul>
    </div>

    <style scoped>
        .header {
            padding-left: 10px;
            background: linear-gradient(45deg, 
                                        rgba(255, 255, 255, 1), 
                                        rgba(255, 255, 255, 0.9),
                                        rgba(255, 255, 0, 0)) fixed, url(images/mainimg.jpg) fixed;
            background-size: cover;
            font-size: xx-large;
            text-align: left;
            background-color: white;
            box-shadow: 0 0.125rem 0.25rem 0 rgba(0,0,0,.11);
            position: -webkit-sticky;
            position: sticky;
            top: 0;
        }
        h1 {
            font-weight: bold;
        }
    </style>
    
</header-contents>