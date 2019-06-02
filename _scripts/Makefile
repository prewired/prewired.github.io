PAGESDIR := ../_pages
SRC := child-protection-policy.md 
MD := $(PAGESDIR)/$(SRC)

installdir := ../_build

#OPTIONS := -N --pdf-engine=xelatex --template=sig.tex --number-sections
OPTIONS := --pdf-engine=xelatex --number-sections --template=sig.tex 


PDF := $(SRC:md=pdf)
#PDF := $(patsubst %.md, %.pdf, $(HANDBOOK))



all: clean $(PDF) 


$(PDF): $(MD)
	./filter_md.py $^ | pandoc $(OPTIONS) -o $(PDF)


filter: $(MD)
	./filter_md.py $^ > temp.md

clean:
	-rm *pdf



# pdf:
#     pandoc -N --template=sig.tex child-protection-policy.md --pdf-engine=xelatex -o child-protection-policy.pdf