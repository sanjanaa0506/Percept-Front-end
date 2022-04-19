<!DOCTYPE html>
<html>
<head>

<script type="text/javascript">
	var a;
	var b;
	var res;
	function addi( )
	{
	   a = parseInt(document.getElementById("a").value);
	   b = parseInt(document.getElementById("b").value);
	   if(a && b)
	   {
         res= a+b;
         document.getElementById("add").value= res;
         document.write(res);
	   }
	}
	function sub( )
	{
	   a = parseInt(document.getElementById("a").value);
	   b = parseInt(document.getElementById("b").value);
	   if(a && b)
	   {
         res= a-b;
         document.getElementById("sub").value= res;
         document.write(res);
	   }
	}
	
</script>	



</head>
<body>
<label>Number 1</label>
<input type="text" name="a" id="a">

<label>Number 2</label>
<input type="text" name="b" id="b">

<input type="button" id="add" name="submit" onclick="addi()" value="ADD">
<input type="button" id="sub" name="submit" onclick="sub()" value="Sub">

</body>
</html>