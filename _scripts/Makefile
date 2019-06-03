PAGESDIR := ../_pages
SRC := child-protection-policy.md 
MD := $(PAGESDIR)/$(SRC)
BUILDDIR := ../_build

OPTIONS := --pdf-engine=xelatex --number-sections --template=sig.tex 


PDF := $(SRC:md=pdf)
#PDF := $(patsubst %.md, %.pdf, $(HANDBOOK))


all: $(PDF) 


$(PDF): $(MD)
	./filter_md.py $^ | pandoc $(OPTIONS) -o $(PDF)
	mv $(PDF) $(BUILDDIR)


filter: $(MD)
	./filter_md.py $^ > temp.md

clean:
	-rm $(PDF) 

