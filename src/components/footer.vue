<template>
    <div class="footer">
        <div class="footer-content">
            <div class="footer-section about">
                <h1 class="logo-text"><spam>ABOUT</spam></h1>
                <p>
                   A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. 
                   
                </p>
           
            <div class="contact">
                <spam><i class="fas fa-phone"></i> &nbsp; 123-456-78</spam>
                <spam><i class="fas fa-envelope"></i> &nbsp; 202000@gmail.com</spam>

            </div>
            <div class="socials">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>

            </div>
             </div>
            <div class="footer-section links">
                <h2>Quick Links</h2>
                <br>
                <ul>
                    <a href="#">
                        <li>good</li>
                    </a>
                     <a href="#">
                        <li>good</li>
                    </a>
                     <a href="#">
                        <li>good</li>
                    </a>
                     <a href="#">
                        <li>good</li>
                    </a>
                     <a href="#">
                        <li>good</li>
                    </a>
                </ul>

            </div>
            <div class="footer-section contact"></div>
        </div>

        <div class="footer-bottom">
            &copy; best.com | Designed by Neha
        </div>
    </div>
 
</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
     background: #303036;
    color: #d3d3d3;
    height: 400px;
    position: relative;

}
.footer .footer-bottom {
    background: #343a40;
    color: #686868;
    height: 50px;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding-top: 15px;

}
.footer .footer-content{
    border: 1px solid red;
    height:350px;
    display: flex;

}
.footer .footer-content .footer-section{
    flex: 1;
    padding: 25px;
    border: 1px solid white;

}

</style>
