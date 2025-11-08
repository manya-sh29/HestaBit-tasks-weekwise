# ------------------------------
# validate.sh
# This script checks if the project setup is correct
# and saves the results in a log file with date and time
# ------------------------------

LOG_FILE="logs.txt"

# Write starting message
echo "$(date): Starting validation..." >> $LOG_FILE

# 1️Check if src folder exists
if [ ! -d "src" ]; then
  echo "$(date):  Error - 'src' folder not found!" >> $LOG_FILE
  echo "Please create a folder named src/"
  exit 1
fi

# 2️Check if config.json file exists
if [ ! -f "config.json" ]; then
  echo "$(date): Error - 'config.json' file missing!" >> $LOG_FILE
  echo "Please add a config.json file"
  exit 1
fi

# 3️Check if config.json is valid JSON (simple jq check)
if ! jq . config.json > /dev/null; then
  echo "$(date): Error - config.json has invalid JSON format!" >> $LOG_FILE
  echo "Fix the JSON format in config.json"
  exit 1
fi

# 4️If everything is fine
echo "$(date): All checks passed successfully!" >> $LOG_FILE
echo "Validation completed successfully!"
exit 0
