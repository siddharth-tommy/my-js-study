function tryCatchFunction(){
  try{
    alrt("check")
  }
  catch(err){
    alert(err)
    alert(err.message)
  }
  finally{
    alert("finally working fine !")
  }
}

// eventhough the function stops due to some error the finally completes the required code block