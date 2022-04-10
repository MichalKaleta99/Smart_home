
function check()
{
        var permissions = sessionStorage.getItem("is_parent")
        if (permissions==0)
        {
		    alert("Błąd logowania! Poproś rodzica o pomoc :)");
		    }
		if (permissions==1)
		{
		window.location.replace("/templates/settings");
		}
		    }