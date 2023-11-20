const saveToDb = (newId) => {
    // console.log(newId);
    const existingJobIds = JSON.parse(localStorage.getItem("jobId")) || [];
    // console.log(existingJobIds);
  
    if (!existingJobIds.find((existingId) => existingId === newId)) {
      
      existingJobIds.push(newId);
  
      
      const updatedJobIds = JSON.stringify(existingJobIds);
      console.log(updatedJobIds);
      localStorage.setItem("jobId", updatedJobIds);
    }
};
  
const getFromDb = () => {
    const storedData = localStorage.getItem("jobId");
    if (storedData) {
      const jobIds = JSON.parse(storedData);
    //   console.log(jobIds)
        return jobIds;
    } else {
      return [];
    }
  };
  
  export { saveToDb,getFromDb };
  


