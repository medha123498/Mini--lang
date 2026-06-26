#include <iostream>
#include <string>

using namespace std;


int compile_code(string code)
{

if(code.find("print") != string::npos)

return 1;


return 0;

}



int main()
{

string code;


cout<<"Enter MiniLang code: ";

getline(cin,code);



if(compile_code(code))

cout<<"Compile Successful";


else

cout<<"Syntax Error";



return 0;

}
